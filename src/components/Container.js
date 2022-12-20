import React, {useState} from 'react'

export default function Container() {
    const jsquestions = [
        {
            questionText: 'Inside which HTML element do we put the JavaScript?',
            answerOptions: [
                {answerText: '<javascript>', isAnswer: false},
                {answerText: '<scripting>', isAnswer: false},
                {answerText: '<script>', isAnswer: true},
                {answerText: '<HTML>', isAnswer: false}
            ]
        },
        {
            questionText: 'How do you write "Hello World" in an alert box?',
            answerOptions: [
                {answerText: 'alert("Hello World")', isAnswer: true},
                {answerText: 'msg("Hello Worls")', isAnswer: false},
                {answerText: 'alertBox("Hello World")', isAnswer: false},
                {answerText: 'msgBox("Hello World")', isAnswer: false},
            ]
        },
        {
            questionText: 'What will be result of console.log(typeof typeof 1);',
            answerOptions: [
                {answerText: 'number', isAnswer: false},
                {answerText: '1', isAnswer: false},
                {answerText: 'String', isAnswer: true},
                {answerText: 'true', isAnswer: false},
            ]
        },
        {
            questionText: 'What will be result of console.log(018 - 015);', 
            answerOptions: [
                {answerText: 'NaN', isAnswer: false},
                {answerText: '3', isAnswer: false},
                {answerText: '13', isAnswer: false},
                {answerText: '5', isAnswer: true}
            ]
        },
    ]
    const pyquestions = [
        {
            questionText: 'What is output for print("hijk".partition("ab"))',
            answerOptions: [
                {answerText: '["hijk"]', isAnswer: false},
                {answerText: '("hijk")', isAnswer: false},
                {answerText: '("hijk","","")', isAnswer: true},
                {answerText: 'error', isAnswer: false}
            ]
        },
        {
            questionText: 'Which of the following is false statement in python',
            answerOptions: [
                {answerText: 'int(144) == 144', isAnswer: true},
                {answerText: 'int("144") == 144', isAnswer: false},
                {answerText: 'int(144.0) == 144', isAnswer: false},
                {answerText: 'none', isAnswer: false},
            ]
        },
        {
            questionText: 'What is output for raining.find("z")?',
            answerOptions: [
                {answerText: 'Type eroor', isAnswer: false},
                {answerText: '1', isAnswer: false},
                {answerText: '-1', isAnswer: true},
                {answerText: 'none', isAnswer: false},
            ]
        },
        {
            questionText: 'Select the valid code to bind a canvas with a key event p −', 
            answerOptions: [
                {answerText: 'Canvas.entered(Enter, p)', isAnswer: false},
                {answerText: 'Canvas.entered(<Enter>, p)', isAnswer: false},
                {answerText: 'Canvas.entered(key, p)', isAnswer: false},
                {answerText: 'Canvas.entered(<key>, p)', isAnswer: true}
            ]
        },
    ]
    const cpquestions = [
        {
            questionText: 'C++ was developed by ___',
            answerOptions: [
                {answerText: 'Thomas Kushz', isAnswer: false},
                {answerText: 'John Kemney', isAnswer: false},
                {answerText: 'Bjarne Stroutstrup', isAnswer: true},
                {answerText: 'James Goling', isAnswer: false}
            ]
        },
        {
            questionText: '____ is the smallest individual unit in a program.',
            answerOptions: [
                {answerText: 'Variable', isAnswer: false},
                {answerText: 'Control', isAnswer: false},
                {answerText: 'Character', isAnswer: false},
                {answerText: 'Token', isAnswer: true},
            ]
        },
        {
            questionText: 'Auto, static, extern and register are called as ___',
            answerOptions: [
                {answerText: 'Static', isAnswer: false},
                {answerText: 'Register', isAnswer: false},
                {answerText: 'Auto', isAnswer: false},
                {answerText: 'Storage specifier', isAnswer: true},
            ]
        },
        {
            questionText: '____ operators have lower precedence to relational and arithmetic operators.', 
            answerOptions: [
                {answerText: 'Conditional', isAnswer: false},
                {answerText: 'Boolean', isAnswer: false},
                {answerText: 'Logical', isAnswer: false},
                {answerText: 'Relational', isAnswer: true}
            ]
        },
    ]
    const htmlquestions = [
        {
            questionText: 'What does HTML stands for?',
            answerOptions: [
                {answerText: 'Hypertext machine langauage', isAnswer: false},
                {answerText: 'Hybrid markup langauage', isAnswer: false},
                {answerText: 'Hypertext Markup Langauage', isAnswer: true},
                {answerText: 'Hybrid machine langauage', isAnswer: false}
            ]
        },
        {
            questionText: 'Which of the following HTML Elements is used for making any text bold ?',
            answerOptions: [
                {answerText: '<p>', isAnswer: false},
                {answerText: '<b>', isAnswer: true},
                {answerText: '<i>', isAnswer: false},
                {answerText: '<h1>', isAnswer: false},
            ]
        },
        {
            questionText: 'How many attributes are there in HTML5?',
            answerOptions: [
                {answerText: '2', isAnswer: false},
                {answerText: '4', isAnswer: false},
                {answerText: '1', isAnswer: false},
                {answerText: 'none', isAnswer: true},
            ]
        },
        {
            questionText: 'Which of the following attributes is used to open an hyperlink in new tab?', 
            answerOptions: [
                {answerText: 'tab', isAnswer: false},
                {answerText: 'href', isAnswer: false},
                {answerText: 'ref', isAnswer: false},
                {answerText: 'target', isAnswer: true}
            ]
        },
    ]
    const handleOnClick1 = (isAnswer) => {
        if(isAnswer) {
            setScore(score+1);
        }
        const nextQuestion = current1 + 1;
        if(nextQuestion<jsquestions.length){
            setCurrent1(current1 + 1);
        }
        else{
            setShow1(true);
        }
    }
    const handleOnClick2 = (isAnswer) => {
        if(isAnswer) {
            setScore(score+1);
        }
        const nextQuestion = current2 + 1;
        if(nextQuestion<pyquestions.length){
            setCurrent2(current2 + 1);
        }
        else{
            setShow2(true);
        }
    }
    const handleOnClick3 = (isAnswer) => {
        if(isAnswer) {
            setScore(score+1);
        }
        const nextQuestion = current3 + 1;
        if(nextQuestion<cpquestions.length){
            setCurrent3(current3 + 1);
        }
        else{
            setShow3(true);
        }
    }
    const handleOnClick4 = (isAnswer) => {
        if(isAnswer) {
            setScore(score+1);
        }
        const nextQuestion = current4 + 1;
        if(nextQuestion<htmlquestions.length){
            setCurrent4(current4 + 1);
        }
        else{
            setShow4(true);
        }
    }
    const handleJavaScript = ()=>{
        setScore(0);
        document.getElementById("python").style.display="none";
        document.getElementById("javascript").style.display="block";
        document.getElementById("c++").style.display="none";
        document.getElementById("html").style.display = "none";
    }
    const handlePython = ()=>{
        setScore(0);
        document.getElementById("javascript").style.display="none";
        document.getElementById("python").style.display="block";
        document.getElementById("c++").style.display="none";
        document.getElementById("html").style.display = "none";
    }
    const handleCp = ()=>{
        setScore(0);
        document.getElementById("javascript").style.display="none";
        document.getElementById("python").style.display="none";
        document.getElementById("c++").style.display="block";
        document.getElementById("html").style.display = "none";
    }
    const handleHtml = ()=>{
        setScore(0);
        document.getElementById("javascript").style.display="none";
        document.getElementById("python").style.display="none";
        document.getElementById("c++").style.display="none";
        document.getElementById("html").style.display = "block";
    }
    const retake1 = ()=>{
        setShow1(false);
        setCurrent1(0);
        setCurrent2(0);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setCurrent3(0);
        setCurrent4(0);
        //document.getElementById("python").style.display="none";
        //document.getElementById("javascript").style.display="block";
    }
    const [score, setScore] = useState(0);
    const [current1, setCurrent1] = useState(0);
    const [current2, setCurrent2] = useState(0);
    const [current3, setCurrent3] = useState(0);
    const [current4, setCurrent4] = useState(0);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return (
        <>
            <div className="container">
                <h1 className="text-center text-capitalized fw-bold my-3">Welcome to Quiz Competition...</h1>
                <div className="row row-cols-1 row-cols-sm-4 g-4">
                    <div className="col">
                        <div className="card text-dark mb-3 shadow-lg" style={{backgroundColor:"#ffc107"}}>
                            <div className="card-header">JavaScript Quiz</div>
                            <div className="card-body">
                                <h5 className="card-title">About JS</h5> 
                                <p className="card-text">JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. This quiz helps you to understand basics.</p>
                                <button className="btn btn-link text-dark"onClick={handleJavaScript}>Start Quiz</button>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white mb-3 shadow-lg" style={{backgroundColor:"#6610f2"}}>
                            <div className="card-header">Python Quiz</div>
                            <div className="card-body">
                                <h5 className="card-title">About Python</h5> 
                                <p className="card-text">Python is a popular programming language. Python is used on a server to create web applications, data science and Machine Learning. This quiz helps you to understand basics.</p>
                                <button className="btn btn-link text-white" onClick={handlePython}>Start Quiz</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white mb-3 shadow-lg" style={{backgroundColor:"#d63384"}}>
                            <div className="card-header ">C++ Quiz</div>
                            <div className="card-body">
                                <h5 className="card-title">About C++</h5> 
                                <p className="card-text">C++ is an object-oriented programming language. It is an extension to C programming used to create computer programs. This quiz helps you to understand basics.</p>
                                <button className="btn btn-link text-white" onClick={handleCp}>Start Quiz</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 shadow-lg" style={{backgroundColor:"#fd7e14"}}>
                            <div className="card-header">HTML Quiz</div>
                            <div className="card-body">
                                <h5 className="card-title">About HTML</h5> 
                                <p className="card-text">HTML is the standard markup language is the foundation of all web pages. With HTML you can create your own Website. This quiz helps you to understand basics.</p>
                                <button className="btn btn-link text-dark" onClick={handleHtml}>Start Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container my-5">
                    <div id="javascript" className="card mb-3 shadow-lg p-3 bg-body rounded" style={{backgroundColor:"#E57373" ,display: "none"}}>
                        {
                            show1 ? (
                                <div>
                                    <h2 className="text-center text-capitalized fw-bold my-3"> Thank You for taking quiz</h2>
                                    <h3> Your scored {score} out of {jsquestions.length}</h3>
                                    <button type="button" className="btn text-white" onClick={retake1} style={{backgroundColor:"#362222"}}>Retake</button>
                                </div>
                            ) :(
                                <div>
                                    <div>
                                        <h2 className="fw-bold my-3 text-dark">Question {current1 + 1}/ {jsquestions.length} </h2>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold my-3 text-dark">{jsquestions[current1].questionText}</h3>
                                    </div>
                                    <div>
                                        {jsquestions[current1].answerOptions.map((answerOptions)=>(
                                        <button className="btn btn-outline-dark mx-3 my-3" onClick={()=> handleOnClick1(answerOptions.isAnswer)}>{answerOptions.answerText}</button>
                                        ))}
                                    </div>                  
                                </div>
                            )
                        }
                    </div>
                    <div id="python" className="card  mb-3 shadow-lg p-3 bg-body rounded" style={{backgroundColor:"#E57373", display:"none"}}>
                        {
                            show2 ? (
                                <div>
                                    <h2 className="text-center text-capitalized fw-bold my-3"> Thank You for taking quiz</h2>
                                    <h3> Your scored {score} out of {pyquestions.length}</h3>
                                    <button type="button" className="btn text-white" onClick={retake1} style={{backgroundColor:"#362222"}}>Retake</button>
                                </div>
                            ) :(
                                <div>
                                    <div>
                                        <h2 className="fw-bold my-3 text-dark">Question {current2 + 1}/ {pyquestions.length} </h2>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold my-3 text-dark">{pyquestions[current2].questionText}</h3>
                                    </div>
                                    <div>
                                        {pyquestions[current2].answerOptions.map((answerOptions)=>(
                                        <button className="btn btn-outline-dark mx-3 my-3" onClick={()=> handleOnClick2(answerOptions.isAnswer)}>{answerOptions.answerText}</button>
                                        ))}
                                    </div>                  
                                </div>
                            )
                        }
                    </div>
                    <div id="c++" className="card mb-3 shadow-lg p-3 bg-body rounded" style={{backgroundColor:"#E57373" ,display: "none"}}>
                        {
                            show3 ? (
                                <div>
                                    <h2 className="text-center text-capitalized fw-bold my-3"> Thank You for taking quiz</h2>
                                    <h3> Your scored {score} out of {cpquestions.length}</h3>
                                    <button type="button" className="btn text-white" onClick={retake1} style={{backgroundColor:"#362222"}}>Retake</button>
                                </div>
                            ) :(
                                <div>
                                    <div>
                                        <h2 className="fw-bold my-3 text-dark">Question {current3 + 1}/ {cpquestions.length} </h2>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold my-3 text-dark">{cpquestions[current3].questionText}</h3>
                                    </div>
                                    <div>
                                        {cpquestions[current3].answerOptions.map((answerOptions)=>(
                                        <button className="btn btn-outline-dark mx-3 my-3" onClick={()=> handleOnClick3(answerOptions.isAnswer)}>{answerOptions.answerText}</button>
                                        ))}
                                    </div>                  
                                </div>
                            )
                        }
                    </div>
                    <div id="html" className="card mb-3 shadow-lg p-3 bg-body rounded" style={{backgroundColor:"#E57373" ,display: "none"}}>
                        {
                            show4 ? (
                                <div>
                                    <h2 className="text-center text-capitalized fw-bold my-3"> Thank You for taking quiz</h2>
                                    <h3> Your scored {score} out of {htmlquestions.length}</h3>
                                    <button type="button" className="btn text-white" onClick={retake1} style={{backgroundColor:"#362222"}}>Retake</button>
                                </div>
                            ) :(
                                <div>
                                    <div>
                                        <h2 className="fw-bold my-3 text-dark">Question {current4 + 1}/ {htmlquestions.length} </h2>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold my-3 text-dark">{htmlquestions[current4].questionText}</h3>
                                    </div>
                                    <div>
                                        {htmlquestions[current4].answerOptions.map((answerOptions)=>(
                                        <button className="btn btn-outline-dark mx-3 my-3" onClick={()=> handleOnClick4(answerOptions.isAnswer)}>{answerOptions.answerText}</button>
                                        ))}
                                    </div>                  
                                </div>
                            )
                        }
                    </div>
                    
                      
                </div>
            
        </>
    )
}
