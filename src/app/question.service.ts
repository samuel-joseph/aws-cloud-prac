import { Injectable } from '@angular/core';
import { questions } from './helper/content';

export interface Question {
  chapter: string;
  question: string;
  options: string[];
  answer: string[];
  multipleAnswer: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions = questions

  constructor() { }

    getAllQuestions(): Question[] {
    return this.questions;
  }

    // Natural sorting of chapters
    getChapters(): string[] {
      const chapters = Array.from(new Set(this.questions.map(q => q.chapter)));
      
      // Sort chapters naturally by extracting numerical values
      return chapters.sort((a, b) => {
        const numA = this.extractChapterNumber(a);
        const numB = this.extractChapterNumber(b);
        return numA - numB;
      }).concat('Custom'); // Add 'All' at the end
    }
  
    // Extract the numeric value from the chapter name (e.g., "Chapter 10" => 10)
    extractChapterNumber(chapter: string): number {
      const match = chapter.match(/\d+/); // Find the number in the chapter string
      return match ? parseInt(match[0], 10) : 0; // Return the number or 0 if no match
    }
  
    // Fetch questions filtered by chapter, or return all questions if 'All' is selected
    getQuestionsByChapter(chapter: string): Question[] {
      if (chapter === 'Custom') {
        return this.questions;
      }
      return this.questions.filter(q => q.chapter === chapter);
    }
}
