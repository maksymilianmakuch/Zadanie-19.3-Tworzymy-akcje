import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
//Można tak?
{
	type: 'ADD_COMMENT',
	text: 'Mój pierwszy komentarz'
}
{
	type: 'REMOVE_COMMENT',
	id: 1
}
{
	type: 'EDIT_COMMENT',
	text: 'komentarz edytowany',
	id: 1
}
{
	type: 'THUMB_UP_COMMENT',
	id: 1,
	thumb: 'up'
}
{
	type: 'THUMB_DOWN_COMMENT',
	id: 1,
	thumb: 'down'
}
//Czy trzeba tak?
function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}
function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT, 
	}
}
//Czy w jedno jest zależne od drugiego?
//Czy trzeba dorzucać np: const boundAddComment = text => dispatch(addComment(text));? Efekt jest chyba taki sam, prawda?