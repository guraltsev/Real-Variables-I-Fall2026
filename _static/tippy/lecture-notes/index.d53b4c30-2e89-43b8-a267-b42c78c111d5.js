selector_to_html = {"a[href=\"#planned-unit-map\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Planned unit map<a class=\"headerlink\" href=\"#planned-unit-map\" title=\"Link to this heading\">#</a></h2><p><span class=\"lecture-log-tentative\">Tentative</span></p>", "a[href=\"../calendar.html#daily-lecture-log\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Daily lecture log<a class=\"headerlink\" href=\"#daily-lecture-log\" title=\"Link to this heading\">#</a></h2><p><span class=\"lecture-log-tentative\">Tentative</span>: Future lecture topics and their placement may change as the course develops.</p>", "a[href=\"#lecture-notes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Lecture Notes<a class=\"headerlink\" href=\"#lecture-notes\" title=\"Link to this heading\">#</a></h1><p>Lecture notes will be added here as the semester progresses. Until a note is published, use the reading listed in the <a class=\"reference internal\" href=\"../calendar.html#daily-lecture-log\"><span class=\"std std-ref\">daily lecture log</span></a>.</p>"}
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
