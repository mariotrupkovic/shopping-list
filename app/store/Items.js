/**
 * Store: Items
 */
Ext.define('Sl.store.Items', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Sl.model.Item',
		storeId: 'items',
		autoLoad: true
	}
});