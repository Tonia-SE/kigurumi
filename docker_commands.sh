   docker build -t tregubovatonia/kigurumi_me . # сбилдить имадж
   docker images  # посмотреть список текущих имаджей
   docker login -u tregubovatonia # залогиниться на hub.docker.com пароль trit11091986
   docker push tregubovatonia/kigurumi_me # выложить имадж на hub.docker.com

   docker run --network host tregubovatonia/kigurumi_me # запустить контейнер из имаджа на любом компьютере где есть docker

   ip a # найти Ip адресс