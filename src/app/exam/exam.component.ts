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
  chapters: string[] = []; // Available chapters for filtering
  selectedChapter: string = ''; // The chapter selected by the user
  isChapterSelected = false; // Indicates if a chapter has been selected

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    // Load available chapters including "All" from the question service
    this.chapters = this.questionService.getChapters();
  }

  // Function to handle chapter selection from the dropdown
  selectChapter(event: any) {
    const chapter = event.target.value;
    if (chapter) {
      this.selectedChapter = chapter;
      this.questions = this.questionService.getQuestionsByChapter(chapter);
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.isChapterSelected = true; // Mark chapter as selected
    }
  }

  // Function to handle selecting an answer (toggle for multiple answers)
  toggleAnswer(selectedAnswer: string) {
    if (this.selectedAnswers.includes(selectedAnswer)) {
      this.selectedAnswers = this.selectedAnswers.filter(answer => answer !== selectedAnswer);
    } else {
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

    this.selectedAnswers = []; // Reset selected answers for the next question

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
    alert(`You scored ${this.score} out of ${this.questions.length}`);
  }
}
