Ext.define('HMS.view.desktop.window.Report', {
    extend: 'Ext.panel.Panel',
    xtype: 'report',
    id: 'report',


    width: '100%',
    height: '100%',
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    scrollable: 'y',
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items: [
            {
                xtype: 'form',
                height: '100%',
                id: 'report_form',
                width: 640,
                frame: true,
                layout: {
                    type: 'vbox',
                    align: 'middle'
                },
                bodyPadding: 30,
                items: [
                    {
                        xtype: 'image',
                        height: 90,
                        width: 90,
                        margin: '0 0 0 100',
                        alt: 'logo-img',
                        src: 'resources/images/logo.png'
                    },
                    {
                        xtype: 'component',
                        width: 280,
                        height: 27,
                        margin: '9 0 0 0',
                        html: '<h3>XYZ Hospital</h3>',
                        style: {
                            'font-size': '20px',
                            'text-align': 'center',
                            'margin': 'auto'
                        }
                    },
                    {
                        xtype: 'component',
                        width: 280,
                        height: 27,
                        margin: '9 0 0 0',
                        html: '<p>Banani,Dhaka Bangladesh</p>',
                        style: {
                            'font-size': '20px',
                            'text-align': 'center',
                            'margin': 'auto'
                        }
                    },
                    {
                        xtype: 'textfield',
                        width: '90%',
                        margin: "25 0 0 0",
                        id: 'RN',
                        fieldLabel: 'Patient Name',
                        name: 'paitent_name',
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: '90%',
                        defaultType: 'textfield',
                        items: [{

                            fieldLabel: 'Patient Age',
                            margin: "25 0 0 0",
                            name: 'paitent_age',
                            id: 'RA'
                        }, {
                            xtype: 'datefield',
                            width: '45%',
                            id: 'RD',
                            // width: 150,
                            fieldLabel: 'Visit Date',
                            margin: "25 0 0 10",
                            name: 'visit_date',
                            format: 'd-m-Y', // Date format (you can change it as needed)
                            minValue: new Date(), // Set the minimum date to today to prevent past dates
                            listeners: {
                                select: function (datefield, date) {
                                    // Close the date picker when a date is selected
                                    datefield.collapse();
                                },
                                validator: function (value) {
                                    // Custom validation logic to ensure the date is valid for appointments
                                    if (value.getDay() === 0 || value.getDay() === 6) {
                                        return 'Weekends are not valid appointment days';
                                    }
                                    // Add more custom validation rules as needed
                                    return true; // Return true if the date is valid
                                },
                            },
                        }]
                    }, {
                        xtype: 'container',
                        layout: 'hbox',
                        // width: '90%',
                        margin: "25 0 0 0",
                        defaultType: 'textfield',
                        items: [{
                            xtype: 'textarea',
                            height: 500,
                            id: 'TAL',
                            reference: 'wordTextarea',
                            enableKeyEvents: true,
                            hideLabel: true,
                            grow: true,
                            growMin: 100,
                            growMax: 200,
                            border: false,
                            style: {
                                border: 0
                            }
                        }, {
                            xtype: 'textarea',
                            height: 500,
                            width: 500,
                            id: 'TAR',
                            reference: 'wordTextarea',
                            enableKeyEvents: true,
                            hideLabel: true,
                            grow: true,
                            growMin: 100,
                            growMax: 200,
                            border: false,
                            style: {
                                border: 0
                            }
                        }],
                    },
                    // {
                    //     xtype: 'container',
                    //     id: 'bT',
                    //     height: 50,
                    //     margin: "25 0 0 0",
                    //     html: 'Signature',
                    //     headerPosition: 'bottom'
                    //     // left: 400,
                    //     // items: [{
                    //     //     xtype: 'tbtext',
                    //     //     title: 'Signature',
                    //     //     headerPosition: 'bottom'
                    //     // }]
                    // }
                ],

            },{
                xtype:'button',
                text:'print',
                margin:'25 0 0 0',
                handler:{
                    function () {
                        // Create a new window to contain the content to be printed
                        var printWindow = window.open('', '_blank');
                        
                        // Get the HTML content of the panel
                        var panelContent = Ext.getCmp('report').getHtml(); // Replace 'yourPanelId' with your actual panel ID
                        
                        // Set the content of the print window
                        printWindow.document.write('<html><head><title>Print</title></head><body>');
                        printWindow.document.write(panelContent);
                        printWindow.document.write('</body></html>');
                        
                        // Close the document stream
                        printWindow.document.close();
                        
                        // Print the content
                        printWindow.print();
                        
                        // Close the print window after printing
                        printWindow.close();
                    }
                    
                }
            }
        ]
    }]
})