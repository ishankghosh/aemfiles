/* Display filename in fake file upload field */
(function($) {
    function initFakeFileUploads() {
        $(".fake-file-upload").each(function() {
            var el = $(this);
            var inp = el.find("div");
            el.on("click mouseout", "input[type=file]", function() {
               var file = $(this).val();
               if (file.lastIndexOf("\\") >= 0) file = file.substr(file.lastIndexOf("\\") + 1);
               inp.text(file); 
            });
        });
    }

    $(document).ready(function() {
        initFakeFileUploads();
    });
})(jQuery);