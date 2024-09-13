import { Component, OnInit } from '@angular/core';
import { QuestionService, Question } from '../question.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0; // Tracks the current question
  score = 0; // Global score
  currentQuestion!: Question; // The current question to display
  selectedAnswers: string[] = []; // Stores selected answers

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    // Load all the questions and start with the first one
    this.questions = this.questionService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  // Function to handle selecting an answer (toggle for multiple answers)
  toggleAnswer(selectedAnswer: string) {
    if (this.selectedAnswers.includes(selectedAnswer)) {
      // If the answer is already selected, remove it (toggle off)
      this.selectedAnswers = this.selectedAnswers.filter(answer => answer !== selectedAnswer);
    } else {
      // Otherwise, add the selected answer to the array (toggle on)
      this.selectedAnswers.push(selectedAnswer);
    }
  }

  // Function to submit the current question's answers
  submitAnswers() {
    const correctAnswers = this.currentQuestion.answer.sort();
    const selectedAnswersSorted = this.selectedAnswers.sort();

    if (JSON.stringify(selectedAnswersSorted) === JSON.stringify(correctAnswers)) {
      this.score++; // Increment the score if the answers are correct
    } else {
      alert('Incorrect! The correct answers are: ' + correctAnswers.join(', '));
    }

    // Reset selected answers for the next question
    this.selectedAnswers = [];

    // Move to the next question, or show the final score
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.showFinalScore();
    }
  }

  // Display the final score when all questions are done
  showFinalScore() {
    alert(`You scored ${this.score} out of ${this.questions.length}: ${(this.score/this.questions.length)*100}%`);
  }
}
