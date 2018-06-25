using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GamerPilotLanding2.Models;
using GamerPilotLanding2.Data;

namespace GamerPilotLanding2.Controllers
{
    public class HomeController : Controller
    {

        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("forældre")]
        public IActionResult Parents()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Subscribe(string email, string returnUrl)
        {
            if (string.IsNullOrEmpty(email))
            {
                TempData["Error"] = "Emailen kan ikke være tom";
                return RedirectToAction(returnUrl);
            }

            if (_context.Subscriptions.Any(x => x.Email == email))
            {
                TempData["Success"] = "Det ser ud til, at du allerede er skrevet op!";
                return RedirectToAction(returnUrl);
            }

            var user = new User()
            {
                Email = email,
                Created = DateTime.Now
            };

            try
            {
                _context.Subscriptions.Add(user);
                _context.SaveChanges();
                TempData["Success"] = "Tillykke, du er nu på listen!";
            }
            catch (Exception)
            {
                TempData["Error"] = "Hov noget gik galt - Kontakt os gerne";
            }

            return RedirectToAction(returnUrl);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
