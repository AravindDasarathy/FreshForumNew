import Controller from '@ember/controller';
//import $ from 'jquery';
// import moment from 'moment';
export default Controller.extend({
	question_value : '',
	question_area_id : '',
	actions : {
		save_question() {
			let question = this.get('question_value');
			let question_date = new Date();
			const new_question = this.store.createRecord('questionmodel', {question : question, question_timestamp : question_date});
			new_question.save();
			debugger;
			alert('Thank you! Your question has been successfully posted!');
			// const new_question = this.store.createRecord('questionmodel', {question : question});
			// new_question.save();
		}
	}
});