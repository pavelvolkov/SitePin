// Run script on page load to dertermine wether to show the promt
window.onload = function()
{
    try {
        if (window.external.msIsSiteMode()) {
            // Continue intialization
        }
        else {
            document.getElementById('divPinSite').style.display = "block";
        }
    }
    catch (e) {
        // Fail silently. Pinned Site API not supported.
    }
}