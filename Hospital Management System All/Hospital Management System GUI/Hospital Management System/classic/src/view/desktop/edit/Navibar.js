Ext.define('HMS.view.desktop.edit.Navibar', {
    extend: 'Ext.tab.Panel',
    xtype: 'navi-bar',
    id: 'navT',

    //  height: 1020,


    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,
    tabBar: {

        border: false
    },

    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },

    items: [
        {

            title: 'Department',
            // glyph: 72,
            xtype: 'departmentList',
            // iconCls: '/resources/image/sicon.png',
            // iconCls: 'fa-student',


        },
        {

            title: 'Add Doctor',
            // glyph: 72,
            xtype: 'doctor-form',
            // iconCls: '/resources/image/sicon.png',
            // iconCls: 'fa-student',


        },
        {

            title: 'Edit Doctor',
            // glyph: 72,
            xtype: 'doctorlist',
            // iconCls: '/resources/image/sicon.png',
            // iconCls: 'fa-student',


        },
        {

            title: 'Patient',
            // glyph: 72,
            xtype: 'mainlist',
            // iconCls: '/resources/image/sicon.png',
            // iconCls: 'fa-student',


        }, {
            title: 'Admission',
            xtype: 'addmissionlist',
            // glyph: 117,
            // xtype:'userlist',
            // iconCls: 'fa-teacher',

        }, {
            title: 'Treatment',
            // glyph: 117,
            xtype: 'treatmentmain',
            // iconCls: 'fa-teacher',

        },
        {
            title: 'Create User',
            // glyph: 117,
            xtype: 'reg-view',
            // iconCls: 'fa-teacher',

        }

    ]
});