Ext.define('Sl.view.item.Form', {
	extend: 'Ext.form.FieldSet',
	alias: 'widget.itemform',
	xtype: 'itemform',
	requires: [
		'Ext.field.Number',
		'Ext.field.Select'
	],

	config: {
		title : 'Item',
		xtype: 'fieldset',
		ui: 'light',
		fieldDefaults: {
			labelAlign: 'top'
		},
		defaultType: 'textfield',
		defaults: {
			anchor: '100%'
		},
		items: [
			{
				name : 'name',
				label: 'Name'
			},
			{
				xtype: 'numberfield',
				name: 'count',
				label: 'Count',
				maxValue : 1000,
				minValue : 1
			},
			{
				xtype: 'selectfield',
				name : 'unit',
				label: 'Unit',
				valueField : 'unit',
				displayField : 'unit',
				store : 'units',
				queryMode: 'local'
			}
		]
	}
});