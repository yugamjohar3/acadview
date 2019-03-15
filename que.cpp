#include <bits/stdc++.h>

using namespace std;
class Stack{
    public:
    char stk[100];
    int top=-1,flag=0;
    void push(char x)
    {
        stk[++top]=x;
    }
    void pop(){
        top--;
    }
    void check(char x){
        
        if(x==')'&& stk[top]=='(')
        {
            flag=1;
        }
        else if(x==']'&& stk[top]=='[')
        {
            flag=1;
        }
        else if(x=='}'&& stk[top]=='{')
        {
            flag=1;
        }
        pop();
    }
};
int main(){
    int t,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    cin>>t;
    for(int j=0;j<t;j++){
    string s;
    Stack s1;
    cin>>s;
    int l=s.length();
        for(int i=0;i<l;i++)
        {
            if(s[i]=='(')
            {
                b1++;
            }
            if(s[i]=='[')
                b2++;
            if(s[i]=='{')
                b3++;
            if(s[i]==')')
                b4++;
            if(s[i]==']')
                b5++;
            if(s[i]=='}')
                b6++;
        }
        if(b1==b4&&b2==b5&&b3==b6){
    for(int i=0;i<l;i++)
    {
        if(s[i]=='('||s[i]=='{'||s[i]=='[')
        {
            s1.push(s[i]);
        }
        else{
            s1.check(s[i]);
            if(s1.flag==0)
            {
                i=l;
            }
        }
    }
    if(s1.flag==0)
    {
        cout<<"YES"<<endl;
        
    }
    else
    cout<<"YES"<<endl;
}
    else
        cout<<"NO"<<endl;
    }
    return 0;
}
