var tour;


function startTour() {

    //cancel the current tour to prevent multiple ongoing tours
    if (Shepherd.activeTour != null && Shepherd.activeTour != 'undefined') {
        tour.cancel();
        this.createTour();
    } else {
        this.createTour();
    }
}

function createTour() {

    tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-theme-arrows',
            showCancelLink: true,
            scrollTo: true,
            scrollToHandler: function (e) {
                $('html, body').animate({
                    scrollTop: $(e).offset().top - 400
                }, 700);
            },
            when: {
                cancel: function () {
                    tour = null;
                }
            }
        }
    });

    tour.addStep('Quickbox', {
        title: 'Gamerpilot\'s Learning Manifest',
        text: 'These are principles we always have in mind </br> when we design courses',
        attachTo: '#shep-step1 bottom',
        advanceOn: '#shep-step2 click'
    });

    tour.addStep('Life-skils', {
        title: '21st century skills',
        text: 'These skills function as the backbone of our learning curriculum </br> and play a major role in the topics we engage in',
        attachTo: '#shep-step2 bottom',
        advanceOn: '#shep-step3 click'
    });

    tour.addStep('Learningwheel', {
        scrollTo: true,
        title: 'The Learning Wheel',
        text: 'All of our courses are designed by four major phases',
        attachTo: '#shep-step3 top',
        advanceOn: '#shep-step4 click',
    });

    tour.addStep('CourseStructure', {
        title: 'Course Structure',
        text: 'Our courses are designed by experts from the real world and highly skilled players </br> Why don\'t you take a closer look?',
        attachTo: '#shep-step4 top',
        advanceOn: '#shep-step5 click'
    });

    tour.addStep('Experts', {
        title: 'Some of our experts',
        text: 'To help emphasize the importance of the skill and create a fluid </br>  connection a course always involves at least one expert ',
        attachTo: '#shep-step5 top',
        advanceOn: '#shep-step6 click'
    });

    tour.addStep('Internal', {
        title: 'Internal Motivation',
        text: 'Interest holds a clear advantage when it comes to learning </br> and what interests young people more than e-sport?',
        attachTo: '#shep-step6 top',
        advanceOn: '#shep-step7 click'
    });

    tour.addStep('Authentic', {
        title: 'Authentic Learning',
        text: 'We believe e-sport is able to achieve things traditional teaching methods can\'t.',
        attachTo: '#shep-step7 top',
        advanceOn: '#shep-step8 click'
    });

    tour.addStep('MentalBlocks', {
        title: 'Mental Building Blocks',
        text: 'Learning is a process and e-sport and games are a perfect arena to gradually build greater knowledge.',
        attachTo: '#shep-step8 top',
        advanceOn: '#shep-step9 click'
    });

    tour.addStep('Theory1', {
        title: 'Visible Learning',
        text: 'Transparency is crucial to ensure a solid learning outcome',
        attachTo: '#shep-step9 top',
        advanceOn: '#shep-step10 click'
    });

    tour.addStep('Theory2', {
        title: 'The Zone for Nearest Development',
        text: 'We make the process easier by helping the children navigate in the videos </br> and present relevant material',
        attachTo: '#shep-step10 top',
        advanceOn: '#shep-step11 click'
    });

    //create complete button 
    buttons = [];
    buttons.push({
        text: 'Complete',
        classes: 'shepherd-button-primary',
        action: function () {
            return tour.complete();
        }
    });

    tour.addStep('Subscribe', {
        title: 'Subscribe',
        text: 'Did you know 4/5 parents are ready to support their child\'s </br> e-sports ambitions on the same level as regular sports?',
        attachTo: '#shep-step11 top',
        buttons: this.buttons
    });

    tour.start();

}
/***************/

