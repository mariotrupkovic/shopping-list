Ext.define('Sl.view.item.List', {
	extend: 'Ext.List',
	alias: 'widget.itemlist',

	xtype: 'itemlist',
	requires: ['Ext.TitleBar'],

	config: {
		emptyText: 'No shopping items in list!',

		// See complex XTemplates http://docs.sencha.com/touch/2-0/#!/api/Ext.XTemplate
		itemTpl: new Ext.XTemplate(
			'<span class="count">{count}</span>',
			'<span class="unit">{unit}</span>',
			'- {name}',
			'<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>'
		),
		store: 'items',
		items: [
			{
				xtype: 'titlebar',
				title: 'Shopping List',
				items: [
					{
						iconCls: 'add',
						iconMask: true,
						align: 'right',
						action: 'item-add'
					}
				]
			}
		]
	}
});