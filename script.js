function fibonacci(num) {
// your code here
	if(num==0)
	{
		return 0;
	}
	if(num==1 || num==2)
	{
		return 1;
	}
	let a=0,b=1,c=0;
	for(let i=3;i<=num;i++)
		{
			c=a+b;
			c=a;
			a=b;
		}
	return c;
}

module.exports = fibonacci;
