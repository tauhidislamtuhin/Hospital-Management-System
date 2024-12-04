Ext.define('HMS.view.desktop.window.PaitentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.form-checkout',

    getForm: function () {
        return this.getView().getForm();
    },

    onResetClick: function () {
        this.getForm().reset();
    },

    onPaitent: function () {
        // var tabPanel7 = Ext.getCmp('pTab');
        // var tab7;
        // // if (!tabPanel7) {
        // tab7 = tabPanel7.add({
        //     title: 'Paitent List',
        //     xtype: 'mainlist',
        // });
        // tabPanel7.setActiveTab(tab7);
        this.tabGenerator('Patient List', 'mainlist')

    },


    onAddPaitent: function () {
        // var tabPanel2 = this.getView(),
        //     tab2 = tabPanel2.add({
        //         title: 'Add Paitent',
        //         xtype: 'form-grid',
        //     });


        // tabPanel2.setActiveTab(tab2);
        this.tabGenerator('Add Patient', 'form-grid')
    },


    onAddAddmissionP: function () {
        // var tabPanel1 = this.getView(),
        //     tab3 = tabPanel1.add({
        //         title: 'Add Addmission Paitent',
        //         xtype: 'admission-form',
        //     });


        // tabPanel1.setActiveTab(tab3);
        this.tabGenerator('Add Addmission Patient', 'admission-form')
    },


    onAddmissionEdit: function () {
        // var tabPanel4 = this.getView();
        // // if (!tabPanel1) {
        // tab4 = tabPanel4.add({
        //     title: 'Addmission Paitent Edit',
        //     xtype: 'addmissionPaitent',
        // });
        // // }


        // tabPanel4.setActiveTab(tab4);
        this.tabGenerator('Addmission Patient Edit', 'addmissionPaitent')
    },


    onAddmissionList: function () {
        // var tabPanel5 = this.getView();
        // // if (!tabPanel1) {
        // tab5 = tabPanel5.add({
        //     title: 'Addmission Paitent List',
        //     xtype: 'addmissionlist',
        // });
        // // }


        // tabPanel5.setActiveTab(tab5);
        this.tabGenerator('Addmission Patient List', 'addmissionlist')
    },

    tabGenerator: function (title, xtype) {

        var tabPanel = this.getView();
        var existingTab = Ext.getCmp(xtype + '_tab')
        if (!existingTab) {
            tab = tabPanel.add({
                title: title,
                xtype: xtype,
               id: xtype + '_tab'
            });
            tabPanel.setActiveTab(tab);
        }
        else {
            tabPanel.setActiveTab(existingTab)
        }

    } 


});