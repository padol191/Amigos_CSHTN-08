import { useState } from "react";
import './Quiz.css';
const Quiz = () => {
    const questions = [
		{
			questionText: 'Which type of indexes does MongoDB support?',
			answerOptions: [
				{ answerText: 'Compound Indexes', isCorrect: false },
				{ answerText: 'Multikey Indexes', isCorrect: false },
				{ answerText: 'Geospatial Indexes', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: ' Which is the default mode in which the explain() command runs?',
			answerOptions: [
				{ answerText: 'allPlansExecution', isCorrect: false },
				{ answerText: 'executionStats', isCorrect: false},
				{ answerText: 'queryPlanner', isCorrect: true },
				{ answerText: 'customExecutionStats', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following command is used to install the Node.js express module?',
			answerOptions: [
				{ answerText: '$ install express', isCorrect: false },
				{ answerText: '$ node install express', isCorrect: false },
				{ answerText: '$ npm install express', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following module is not a built-in node module?',
			answerOptions: [
				{ answerText: 'https', isCorrect: false },
				{ answerText: 'dgram', isCorrect: false },
				{ answerText: 'fsread', isCorrect: true },
				{ answerText: 'zlib', isCorrect: false },
			],
		},
	];
    // const sample=questions[0].answerOptions[0].answerText

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [disable, setDisable] = useState(false);
    const [answer,setAnswer] = useState('');
	const [correct, setCorrect] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		setDisable(true);
		if (isCorrect) {
			setScore(score + 1);
            setAnswer("Correct!")
			setCorrect('');
			
		}
        else{
            let correct_ans = '';
            for(let i = 0; i < 4; i++){
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
		setDisable(false);
    };
    const handleNextOption = () =>{

        setAnswer('');
		setCorrect('');
		setDisable(false)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }
    return (  
        <div className='quiz-main'>
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
						<div className='next-btn-div'>
						<button className="next-btn" onClick={() => handleNextOption()}>Next Question</button>
						</div>
                        
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button disabled={disable} className="quiz-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    );
}
 
export default Quiz;