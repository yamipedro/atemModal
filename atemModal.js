/*
    Require jQuery and bootstrap 3
*/

var atemModal = new function() {
    this.modalTime = 250;
    this.modalThemes = {
        atemModal_default : { back : '#e9e9e9', color : 'dimgray'},
        atemModal_primary : { back : '#2b679c', color : '#fff'},
        atemModal_success : { back : '#49a049', color : '#fff'},
        atemModal_warning : { back : '#ed9c2a', color : '#fff'},
        atemModal_danger : { back : '#cb3e3a', color : '#fff'}
    }
    this.modalTheme = this.modalThemes.atemModal_default;
    this.setTheme = function(theme) {
        if (Object.keys(this.modalThemes).indexOf(theme) != -1) this.modalTheme = this.modalThemes[theme];
    }
    this.getThemes = function() {
        return this.modalThemes;
    }

    this.overlay = '<div id="atemModal_overlay"></div>';
    this.modalHtml = function(title, content) {
        return `
            <div id="atemModal_modal">\
                <div id="atemModal_modal_white">\
                    <div id="atemModal_title" style="background: `+this.modalTheme.back+`; color: `+this.modalTheme.color+`;">
                        `+title+`
                        <span id="atemModal_close" onclick="atemModal.closeModal()" class="glyphicon glyphicon-remove"></span>
                    </div>
                    <div id="atemModal_content">`+content+`</div>
                    <div id="atemModal_buttons"></div>
                </div>\
            </div>\
        `;
    }
    this.closeModal = function() {
        $('#atemModal_overlay').hide(this.modalTime);
        setTimeout(function() {
            $('#atemModal_overlay').remove();
        }, this.modalTime);
    }
    this.addButtons = function(buttons) {
        var b = '';
        buttons.forEach(function(bt, i) {
            $('#atemModal_buttons').append('<button id="atemModal_button_'+i+'" class="btn btnatem '+bt.type+'">'+bt.text+'</button>');
            $('#atemModal_button_'+i).click(bt.onclick);
        });
    }
    this.modal = function(title, content, buttons, close = false) {
        $("#atemModal_overlay").remove();
        $('body').append(this.overlay);
        $('#atemModal_overlay').append(this.modalHtml(title, content, buttons));
        this.addButtons(buttons);
        if (close) {
            $('#atemModal_close').show();
        }
        $('#atemModal_overlay').show(this.modalTime);
    }
}