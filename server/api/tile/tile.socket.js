/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var tile = require('./tile.model');

exports.register = function(socket) {
  tile.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  tile.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tile:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tile:remove', doc);
}

