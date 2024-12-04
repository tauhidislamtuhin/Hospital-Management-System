Ext.define('M.view.logView.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginController',

    // for login registaion anchor click this will destory the login view and create registation view
    onRegisterL: function () {
        this.getView().destroy();
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'reg-view'
            }]
        });
    },
    // for login registaion anchor click this will destory the login view and create registation view
    onlogR: function () {
        this.getView().destroy();
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'login-view'
            }]
        });
    },
    // onReg click on this it will call desktop view and destory previus view
    onReg: function () {
        var myComboBox = Ext.getCmp('user_roll'); 
        var selectedText = myComboBox.getRawValue();
        var dataToSend = {
            email: Ext.getCmp('remail').value,
            username: Ext.getCmp('ruser').value,
            password: Ext.getCmp('rpass').value,
            position: selectedText,


        };

        Ext.Ajax.request({
            url: 'http://localhost:8080/createlogin', // Replace with your Spring Boot endpoint URL
            method: 'POST',
            jsonData: dataToSend,

            success: function (response) {
                // Handle success response from the server
                Ext.Msg.alert('Created Success', 'Plase Logged in!');
                // Ext.create('Ext.container.Viewport', {
                //     layout: 'fit',
                //     items: [
                //         {
                //             xtype: 'login',

                //         }
                //     ]

                // })
               // window.location.reload();
                var responseData = Ext.decode(response.responseText);


                console.log('Response:', responseData);
            },

            failure: function (response) {
                Ext.Msg.alert('Created failed', 'Use Different Information!');
                // Handle failure or error response from the server
                console.error('Request failed:', response);
            }
        });
        // var form1 = this.lookupReference('formReg').getForm();

        // if (form1.isValid()) {
        //     this.getView().destroy();
        //     Ext.create('Ext.container.Viewport', {
        //         layout: 'fit',
        //         items: [{
        //             xtype: 'desktop-view'
        //         }]
        //     });
        //     Ext.Msg.alert('Login Success', 'You have been logged in!');
        // }
        // else {
        //     Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        //     fields = form1.getFields();

        //     fields.each(function (field) {
        //         var error;

        //         if (!field.validate() && (error = field.getErrors())) {
        //             errors.push({
        //                 errors: error,
        //                 name: field.getFieldLabel()
        //             });
        //         }
        //     });
        // }

        // if (errorCmp) {
        //     errorCmp.setData(data);
        // }

        // if (form.isValid()) {
        //     out = [];

        //     Ext.Object.each(form.getValues(), function (key, value) {
        //         out.push(key + '=' + value);
        //     });
        //     Ext.Msg.alert('Submitted Values', out.join('<br />'));
        // }
    },

    updateErrorState: function (cmp, state) {
        var me = this,
            errorCmp = me.lookupReference('formErrorState'),
            view, form, fields, errors;

        view = me.getView();
        form = view.getForm();

        // If we are called from the form's validitychange event, the state will be false if invalid.
        // If we are called from a field's errorchange event, the state will be the error message.
        if (state === false || (typeof state === 'string')) {
            fields = form.getFields();
            errors = [];

            fields.each(function (field) {
                Ext.Array.forEach(field.getErrors(), function (error) {
                    errors.push({ name: field.getFieldLabel(), error: error });
                });
            });

            errorCmp.setErrors(errors);
            me.hasBeenDirty = true;
        }
        else if (state === true) {
            errorCmp.setErrors();
        }
    },

    onTermsOfUseElementClick: function (e) {
        var target;

        target = e.getTarget('.terms');
        e.preventDefault();

        if (target) {
            this.lookupReference('termsOfUseWindow').show();
        }
    },

    acceptTermsOfUse: function () {
        this.closeTermsOfUse(true);
    },

    declineTermsOfUse: function () {
        this.closeTermsOfUse(false);
    },

    closeTermsOfUse: function (accepted) {
        this.lookupReference('termsOfUseWindow').close();
        this.lookupReference('acceptTerms').setValue(accepted);
    },
    onLogin: function () {

        var logView = Ext.getCmp('LV');
        var dataToSend = {
            username: Ext.getCmp('username').value,
            password: Ext.getCmp('password').value
            
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/login', // Replace with your Spring Boot endpoint URL
            method: 'POST',
            jsonData: dataToSend,

            success: function (response) {

                logView.destroy();
                var responseText = response.responseText;
                console.log('Response:', responseText);
                
                if (responseText == 'Admin') {
                    
                    Ext.create('Ext.container.Viewport', {
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'desktop-view',

                            },
                            {
                                xtype: 'hiddenfield',
                                id: 'loginName',
                                value: 'logintest'
                            }
                        ]

                    })

                    Ext.Msg.alert('Login Success', 'You have been logged in!');

                    //Ext.Msg.alert('Login Success', responseText);
                }
                if (responseText == 'Receptionist') {
                    Ext.create('Ext.container.Viewport', {
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'reception-view',

                            },
                            {
                                xtype: 'hiddenfield',
                                id: 'loginName',
                                value: 'logintest'
                            }
                        ]

                    })

                    Ext.Msg.alert('Login Success', 'You have been logged in!');
                }
                if (responseText == 'Doctor') {
                    
                    Ext.create('Ext.container.Viewport', {
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'doctor-view',

                            },
                            {
                                xtype: 'hiddenfield',
                                id: 'loginName',
                                value: 'logintest'
                            }
                        ]

                    })

                    Ext.Msg.alert('Login Success', 'You have been logged in!');
                }

                //  var responseData = Ext.decode(response.responseText);



            },

            failure: function (response) {
                // Handle failure or error response from the server
                console.error('Request failed:', response);
                Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
            }
        });
        // var me = this,
        //     errorCmp = me.lookupReference('formLoginFailure'),
        //     fields,
        //     form = me.lookupReference('formLogin').getForm(),
        //     errors = [],
        //     data = {
        //         errors: errors
        //     };

        // if (form.isValid()) {
        //     this.getView().destroy();
        //     Ext.create('Ext.container.Viewport', {
        //         layout: 'fit',
        //         items: [{
        //             xtype: 'desktop-view'
        //         }]
        //     });
        //     Ext.Msg.alert('Login Success', 'You have been logged in!');
        // }
        // else {
        //     Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        //     fields = form.getFields();

        //     fields.each(function (field) {
        //         var error;

        //         if (!field.validate() && (error = field.getErrors())) {
        //             errors.push({
        //                 errors: error,
        //                 name: field.getFieldLabel()
        //             });
        //         }
        //     });
        // }

        // if (errorCmp) {
        //     errorCmp.setData(data);
        // }


    },

});