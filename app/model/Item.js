Ext.define('Sl.model.Item', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Uuid'],

	config: {
		identifier : 'uuid',
		fields: [
			{
				name: 'name',
				type: 'auto'
			}, {
				name: 'count',
				type: 'auto'
			}, {
				name: 'unit',
				type: 'auto'
			}, {
				name: 'done',
				type: 'boolean',
				defaultValue: false
			}],

		proxy: {
			type: 'localstorage',
			id: 'shopping-items'
		}
	}
});