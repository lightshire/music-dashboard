var SessionStore = require('../../stores/session_stores'),
    Constrainable = {
        statics: {
            willTransitionTo: function(transition, params) {
                if (typeof this.user_types === 'undefined' && this.required_login !== true) {
                    return;
                }

                if (this.required_login === true && !SessionStore.isLoggedIn()) {
                    transition.redirect(this.redirectTo);
                }

                if (typeof this.user_types !== 'undefined' && !SessionStore.hasAccess(this.user_types)) {
                    transition.redirect(this.redirectTo);
                }
            }
        },
        hasAccess: function(user_types) {
            return SessionStore.hasAccess(user_types);
        }
    }

module.exports = Constrainable;
