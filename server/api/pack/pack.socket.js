/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var pack = require('./pack.model');

exports.register = function(socket) {
  pack.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  pack.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pack:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pack:remove', doc);
}
