import mixins
from `rest_framework.viewsets import ModelViewSet
from .users.models import User
from .users.serializers import UserSerializer

class UserViewSet(ModelViewSet, mixins.CreateModelMixin, mixins.ListModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def post(self, request, *args, **kwargs):
        return self.create(request)