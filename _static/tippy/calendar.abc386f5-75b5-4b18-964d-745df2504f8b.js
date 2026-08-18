selector_to_html = {"a[href=\"#calendar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Calendar<a class=\"headerlink\" href=\"#calendar\" title=\"Link to this heading\">#</a></h1><p>I will put all deadlines on your <a class=\"reference external\" href=\"https://learn.uark.edu/ultra/courses/_529398_1/calendar/\">Blackboard Calendar</a>. Please check it regularly!</p>", "a[href=\"#key-university-dates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Key university dates<a class=\"headerlink\" href=\"#key-university-dates\" title=\"Link to this heading\">#</a></h2><p>For official University dates, see the <a class=\"reference external\" href=\"https://registrar.uark.edu/academic-dates/academic-semester-calendar/\">Fall 2026 academic calendar</a> and the <a class=\"reference external\" href=\"https://registrar.uark.edu/registration/final-exam-schedule/fall-2026-final-exam-schedule.php\">Registrar\u2019s final-exam schedule</a>.</p>", "a[href=\"#exams\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Exams<a class=\"headerlink\" href=\"#exams\" title=\"Link to this heading\">#</a></h2>", "a[href=\"lecture-notes/unit-1-introduction-to-measures/01-review-of-riemann-integration.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Review of Riemann Integration<a class=\"headerlink\" href=\"#review-of-riemann-integration\" title=\"Link to this heading\">#</a></h1><p>We review breifly review the construction and properties of the Riemann integral and identify its shortcomings that suggest constructing a new integration theory: the Lebesgue integral</p><p>First, we show that continuous are a natural class on which the Riemann integral is defined. However some discontinuities can be tolerated - we anticipate a result we prove later in the course that provides a complete characterization of Riemann integrable functions. However, this result is formulated in terms of quantities appearing in Lebesgue integration theory.</p>", "a[href=\"#daily-lecture-log\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Daily lecture log<a class=\"headerlink\" href=\"#daily-lecture-log\" title=\"Link to this heading\">#</a></h2><p><span class=\"lecture-log-tentative\">Tentative</span>: Future lecture topics and their placement may change as the course develops.</p>"}
skip_classes = ["headerlink", "sd-stretched-link", "no-hover-preview"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
