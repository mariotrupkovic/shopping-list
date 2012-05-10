Ext.define('Sl.view.item.Add', {
	extend: 'Ext.form.Panel',
	alias: 'widget.itemadd',
	xtype: 'itemadd',

	config: {
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Add Item',
				items: [
					{
						ui: 'back',
						align: 'left',
						text: 'back',
						action: 'back'
					}
				]
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				items: [
					{
						xtype: 'spacer'
					},
					{
						ui: 'confirm',
						align: 'right',
						text: 'Add',
						action: 'item-save'
					}
				]
			},
			{
				xtype: 'itemform'
			}
		]
	}
});
