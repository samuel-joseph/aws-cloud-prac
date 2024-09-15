import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { QuestionService, Question } from '../question.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  questions: Question[] = [];
  allQuestions: Question[] = []; // Store all questions to shuffle
  currentQuestionIndex = 0;
  totalQuestions = 0;
  score = 0;
  mistakes = 0;
  chapterWiseScores: { [key: string]: { correct: number; total: number } } = {};
  currentQuestion!: Question;
  selectedAnswers: string[] = [];
  chapters: string[] = [];
  selectedChapter: string = '';
  isChapterSelected = false;
  progress = 0;
  showBackgroundImage = false;

  constructor(
    private questionService: QuestionService,
    private renderer: Renderer2, private el: ElementRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.allQuestions = this.questionService.getAllQuestions(); // Get all questions
    this.chapters = this.questionService.getChapters(); // Get sorted chapters
    this.totalQuestions = this.questions.length;
  }

  finishTest() {
    this.router.navigate(['/results'], {
      state: {
        score: this.score,
        mistakes: this.mistakes,
        chapterWiseScores: this.chapterWiseScores
      }
    });
  }

  selectChapter(event: any) {
    this.score = 0;
    const chapter = event.target.value;
    if (chapter) {
      this.selectedChapter = chapter;
      if (chapter === 'All') {
        this.questions = [...this.allQuestions];
        // this.questions = [...this.shuffleArray(this.allQuestions).splice(0,65)];
      } else {
        this.questions = this.questionService.getQuestionsByChapter(chapter);
      }
      this.questions = this.shuffleArray(this.questions); // Shuffle questions after selection
      this.shuffleOptions(); // Shuffle options for each question
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.isChapterSelected = true;
      this.updateProgress();
    }
  }

    // Shuffle the options for each question
    shuffleOptions() {
      this.questions.forEach(question => {
        question.options = this.shuffleArray(question.options);
      });
    }

  toggleAnswer(selectedAnswer: string) {
    if (this.selectedAnswers.includes(selectedAnswer)) {
      this.selectedAnswers = this.selectedAnswers.filter(answer => answer !== selectedAnswer);
    } else {
      this.selectedAnswers.push(selectedAnswer);
    }
  }

  submitAnswers() {
    const correctAnswers = this.currentQuestion.answer.sort();
    const selectedAnswersSorted = this.selectedAnswers.sort();

    if (JSON.stringify(selectedAnswersSorted) === JSON.stringify(correctAnswers)) {
      this.score++;
    } else {
      alert('Incorrect! The correct answers are: ' + correctAnswers.join(', '));
    }

    this.selectedAnswers = [];
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.updateProgress();
    } else {
      // this.finishTest()
      this.showFinalScore();
    }
  }

  showFinalScore() {
    alert(`You scored ${this.score} out of ${this.questions.length}: ${(Math.floor(this.score/this.questions.length*100))}%`);
  }

  updateProgress() {
    this.progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  // Helper function to shuffle an array
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  toggleBackground() {
    this.showBackgroundImage = !this.showBackgroundImage;
    const classList = this.el.nativeElement.classList;
    if (this.showBackgroundImage) {
      classList.add('background-image-visible');
      classList.remove('background-image-hidden');
    } else {
      classList.add('background-image-hidden');
      classList.remove('background-image-visible');
    }
  }

  refreshPage() {
      this.isChapterSelected = false
  }
}
