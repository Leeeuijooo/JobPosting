from django.shortcuts import render
from rest_framework.views import APIView


class Sub(APIView):
    template_name = 'clone/main.html'

    def get(self, request):
        print("get으로 호출")
        return render(request, self.template_name)
    
    
    def post(self, request):
        print("post로 호출")
        return render(request, self.template_name)