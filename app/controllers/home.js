import Controller from '@ember/controller';
import $ from 'jquery';
export default Controller.extend({
	question_value : '',
	submit_response_message : '',
	display_question : '',
	question_area_id : '',
  actions : {
		save_and_post_question() {
			const question = this.get('question_value');
			const new_question = this.store.createRecord('question-model', {question : question});
			this.store.createRecord('question-model', {question : question});
			new_question.save();
			this.set('submit_response_message','Thank You! Your question has been successfully posted!');
			this.set('display_question',question);
			this.set('question_value','');
			var div_q = $('#question_area_id');
			div_q.append(`<p class = 'question_text'>${question}</p>`);
			$('#response_message').fadeIn('fast').delay(500).fadeOut('slow');
		}
	}
});