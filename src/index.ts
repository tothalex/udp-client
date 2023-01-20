import { createSocket } from 'dgram'

const socket = createSocket('udp4')

const msg = 'Hello, World!'

socket.send(
  msg,
  80,
  'k8s-default-packetha-bfe6992e15-fd0211df58166544.elb.eu-central-1.amazonaws.com'
)
