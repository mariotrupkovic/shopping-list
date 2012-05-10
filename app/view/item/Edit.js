Ext.define('Sl.view.item.Edit', {
	extend: 'Ext.form.Panel',
	alias: 'widget.itemedit',
	xtype: 'itemedit',

	config: {
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Edit Item',
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
						ui: 'action',
						text: 'delete',
						action: 'item-delete'
					},
					{
						xtype: 'spacer'
					},
					{
						ui: 'confirm',
						text: 'Save',
						action: 'item-edit'
					}
				]
			},
			{
				xtype: 'itemform'
			}
		]
	}
});
