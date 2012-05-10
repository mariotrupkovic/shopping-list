Ext.define('Sl.controller.Items', {
	extend: 'Ext.app.Controller',

	config: {
		models: [
			'Item',
			'Unit'
		],
		stores: [
			'Items',
			'Units'
		],
		views: [
			'item.List',
			'item.Add',
			'item.Edit',
			'item.Form'
		],

		refs: {
			'listView': 'itemlist',
			'addView': 'itemadd',
			'editView': 'itemedit',
			'addButton': 'itemlist button[action=item-add]',
			'backButton': 'button[action=back]',
			'saveButton': 'itemadd button[action=item-save]',
			'editButton': 'itemedit button[action=item-edit]',
			'deleteButton': 'itemedit button[action=item-delete]'

		},
		control: {
			addButton: {
				tap: 'showAddView'
			},
			backButton: {
				tap: 'showListView'
			},
			saveButton: {
				tap: 'addItem'
			},
			editButton: {
				tap: 'editItem'
			},
			deleteButton: {
				tap: 'deleteItem'
			},
			listView: {
				itemtap: 'onItemTapAction'
			}
		}
	},

	// called when the Application is launched, remove if not needed
	launch: function(app) {
		console.log('Controller Items launched');
	},

	/**
	 * on list item tap decide ifshow edit view or check item
	 *
	 * @param {} dataView
	 * @param {} index
	 * @param {} dataItem
	 * @param {} record
	 * @param {} eventObject
	 * @param {} eOpts
	 */
	onItemTapAction: function(dataView, index, dataItem, record, eventObject, eOpts) {
		if (eventObject.getTarget('.checkitem')) {
			this.checkItem(record);
		} else {
			this.showEditView(record);
		}
	},

	/**
	 * Set done property of item
	 *
	 * @param {} record
	 */
	checkItem: function(record) {
		var store = Ext.getStore('items');

		record.set('done', record.get('done') ? false : true );
		store.sync();

		this.getListView().refresh();
	},

	/**
	 * add an item to the store
	 */
	addItem: function(button) {
		var form = button.up('formpanel'),
			values = form.getValues(),
			store = Ext.getStore('items');

		store.add(values);
		store.sync();
		form.reset();

		this.showListView();
	},

	/**
	 * Edit an item
	 */
	editItem: function(button) {
		var form = button.up('formpanel'),
			record = form.getRecord(),
			values = form.getValues(),
			store = Ext.getStore('items');

		record.set(values);
		store.sync();
		form.reset();

		this.showListView();
	},

	/**
	 * delete an item
	 */
	deleteItem: function(button) {
		var form = button.up('formpanel'),
			store = Ext.getStore('items'),
			record = form.getRecord(),
			recordId = record.getId(),
			recordIndex = store.findExact('id', recordId)
			controller = this;

		Ext.Msg.confirm(
			"Delete Item",
			"Are you sure you want to do that?",
			function(btn) {
				if (btn == 'yes') {
					store.removeAt(recordIndex);
					store.sync();
					controller.showListView();
				}
			}
		);
	},

	/**
	 * Show add tem View
	 */
	showAddView: function() {
		var view = this.getAddView() ? this.getAddView() : Ext.create('Sl.view.item.Add');

		Ext.Viewport.setActiveItem(view);
	},
	/**
	 * Show edit tem View
	 */
	showEditView: function(record) {
		var view = this.getEditView() ? this.getEditView() : Ext.create('Sl.view.item.Edit');

		view.setRecord(record);
		Ext.Viewport.setActiveItem(view);
	},

	/**
	 * Show Item List view
	 */
	showListView: function() {
		var view = this.getListView() ? this.getListView() : Ext.create('Sl.view.item.List');

		Ext.Viewport.setActiveItem(view);
	}
});