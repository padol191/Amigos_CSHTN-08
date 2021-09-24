import { useState } from "react";
import './Quiz.css';
const Quiz = () => {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    // const sample=questions[0].answerOptions[0].answerText

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [answer,setAnswer] = useState('');
	const [correct, setCorrect] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
            setAnswer("Correct!")
			setCorrect('');
		}
        else{
            let correct_ans = '';
            for(let i=0 ; i<4 ; i++){
                if(questions[currentQuestion].answerOptions[i].isCorrect){
                    correct_ans = questions[currentQuestion].answerOptions[i].answerText;
					setAnswer("Wrong");
					setCorrect("Correct Answer is : "+correct_ans);
                    break;
                }
            }
        }
		
	};

    const reloadQuiz = () =>{
        setScore(0);
        setCurrentQuestion(0)
        setShowScore(false);
        setAnswer('');
    };
    const handleNextOption = () =>{
        const nextQuestion = currentQuestion + 1;
        setAnswer('');
		setCorrect('');
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }
    return (  
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <br/>
                    <button className="reload" onClick={() => reloadQuiz()}>Retake Quiz</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div className="answer">
                        {answer}
						<br/>
						{correct}
						</div>
                        <button className="next-btn" onClick={() => handleNextOption()}>Next Question</button>
    
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="quiz-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    );
}
 
export default Quiz;