from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Register
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def register_user(request):
    if request.method == 'GET':
        return Response({"message": "Please use POST to submit registration details."})

    name = request.data.get('name')
    email = request.data.get('email')

    if not name or not email:
        return Response({"error": "Name and email are required."}, status=400)

    Register.objects.create(name=name, email=email)
    return Response({"message": "Details submitted successfully"}, status=201)

from .serializers import RegisterSerializer

@api_view(["GET"])
def user_details(request):
    all_users = Register.objects.all()
    serializer = RegisterSerializer(all_users, many=True)
    return Response({"users": serializer.data})
