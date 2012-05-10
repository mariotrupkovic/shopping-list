Ext.define('Sl.store.Units', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Sl.model.Unit',
		storeId: 'units',
		data: [
			{
				unit: 'liter'
			},
			{
				unit: 'pc.'
			},
			{
				unit: 'g'
			},
			{
				unit: 'kg'
			}
		]
	}

});