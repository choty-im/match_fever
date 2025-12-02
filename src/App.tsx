import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginInput, setLoginInput] = useState('');
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [selection, setSelection] = useState<'A' | 'B' | null>(null);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  
  const [submitted1, setSubmitted1] = useState<string | null>(null);
  const [submitted2, setSubmitted2] = useState<string | null>(null);
  const [submitted3, setSubmitted3] = useState<string | null>(null);
  const [submitted4, setSubmitted4] = useState<string | null>(null);

  const handleSubmit1 = () => {
    setSubmitted1(input1);
  };

  const handleSubmit2 = () => {
    setSubmitted2(input2);
  };

  const handleSubmit3 = () => {
    setSubmitted3(input3);
  };

  const handleSubmit4 = () => {
    if (selection) {
      setSubmitted4(`선택${selection}`);
      
      // 1부터 150까지 중 랜덤하게 5개 선택
      const numbers = new Set<number>();
      while (numbers.size < 5) {
        const randomNum = Math.floor(Math.random() * 150) + 1;
        numbers.add(randomNum);
      }
      setRandomNumbers(Array.from(numbers));
    }
  };

  const handleLogin = () => {
    if (loginInput === 'feeever') {
      setIsAuthenticated(true);
    }
  };

  // 로그인 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">테스트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                placeholder="숫자 또는 텍스트 입력"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
              <Button onClick={handleLogin}>제출</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="flex justify-end mb-4">
            <Button 
              onClick={() => {
                setIsAuthenticated(false);
                setLoginInput('');
              }}
              variant="outline"
            >
              돌아가기
            </Button>
          </div>
          <h1 className="mb-2">입력 양식</h1>
          <p className="text-muted-foreground">각 입력 칸에 숫자 또는 텍스트를 입력하고 제출하세요</p>
        </div>

          <Card>
          <CardHeader>
            <CardTitle>당일 MISSION</CardTitle>
            <CardDescription>오늘 모자쓰고 온 사람을 찾으세요!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="바텐더에게 대려오면 프리샷 하나 - 바텐더가 제출 버튼 클릭"
              />
              <Button onClick={handleSubmit1}>제출</Button>
            </div>
            {submitted1 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted1}</span></p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>1차 투표</CardTitle>
            <CardDescription>1차에만 열림/투표하면 프리드링크</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="숫자 또는 텍스트 입력"
              />
              <Button onClick={handleSubmit1}>제출</Button>
            </div>
            {submitted1 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted1}</span></p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2차 투표</CardTitle>
            <CardDescription>2차에만 열림/투표하면 프리드링크</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="숫자 또는 텍스트 입력"
              />
              <Button onClick={handleSubmit2}>제출</Button>
            </div>
            {submitted2 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted2}</span></p>
              </div>
            )}
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>사랑의 메시지</CardTitle>
            <CardDescription>세 번째 입력 칸</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                placeholder="숫자 또는 텍스트 입력"
              />
              <Button onClick={handleSubmit3}>제출</Button>
            </div>
            {submitted3 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted3}</span></p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>나는?</CardTitle>
            <CardDescription>나의 동물상을 고르자면?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setSelection('A')}
                className={`flex-1 px-4 py-2 rounded-md border transition-colors ${
                  selection === 'A' 
                    ? 'bg-white border-gray-300' 
                    : 'bg-gray-400 border-gray-400 text-white'
                }`}
              >
                강아지상
              </button>
              <button
                onClick={() => setSelection('B')}
                className={`flex-1 px-4 py-2 rounded-md border transition-colors ${
                  selection === 'B' 
                    ? 'bg-white border-gray-300' 
                    : 'bg-gray-400 border-gray-400 text-white'
                }`}
              >
                고양이상
              </button>
              <Button onClick={handleSubmit4}>제출</Button>
            </div>
            {submitted4 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted4}</span></p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>내가 좋아하는 상은?</CardTitle>
            <CardDescription> </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setSelection('A')}
                className={`flex-1 px-4 py-2 rounded-md border transition-colors ${
                  selection === 'A' 
                    ? 'bg-white border-gray-300' 
                    : 'bg-gray-400 border-gray-400 text-white'
                }`}
              >
                강아지상
              </button>
              <button
                onClick={() => setSelection('B')}
                className={`flex-1 px-4 py-2 rounded-md border transition-colors ${
                  selection === 'B' 
                    ? 'bg-white border-gray-300' 
                    : 'bg-gray-400 border-gray-400 text-white'
                }`}
              >
                고양이상
              </button>
              <Button onClick={handleSubmit4}>제출</Button>
            </div>
            {submitted4 !== null && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">제출된 값: <span className="font-medium">{submitted4}</span></p>
              </div>
            )}
          </CardContent>
        </Card>

        {randomNumbers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>추천 번호</CardTitle>
              <CardDescription>최대 5개까지할지(그래도 2차때는 새로고침)/혹은 다 보일지</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center items-center">
                {randomNumbers.map((num, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                  >
                    <span className="text-xl">{num}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}