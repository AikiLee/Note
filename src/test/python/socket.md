
应用程序可以通过socket进行主机之间的网络通信，收发网络请求。一般使用情况有两种：

- 低级别的网络服务支持基本的 Socket，它提供了标准的 BSD Sockets API，可以访问底层操作系统 Socket 接口的全部方法。
- - 高级别的网络服务模块 SocketServer， 它提供了服务器中心类，可以简化网络服务器的开发。
## 基础

核心方法：
- socket.socket([family[, type[, proto]]])：创建socket对象，- family: 套接字家族可以使 AF_UNIX 或者 AF_INET。- type: 套接字类型可以根据是面向连接的还是非连接分为 `SOCK_STREAM` 或 `SOCK_DGRAM`。- protocol: 一般不填默认为 0。
	- __服务端套接字：
	- .bind((host,port))
	- .listen(backlog) 最大挂起连接数
	- .accept() 阻塞式等待连接到来，被动接受tcp连接
	- __客户端套接字：
	- .connect(（hostname,port）)主动发起tcp连接服务器，如果出错，返回socket.error错误
	- .connect_ex() 报错时返回错误码，而不是具体的错误信息
	- __通用函数
	- .recv(buffersize[, flags])接收 TCP 数据，数据以字符串形式返回，bufsize 指定要接收的最大数据量。flag 提供有关消息的其他信息，通常可以忽略。
	- .send(data[, flags]) 发送 TCP 数据，将 string 中的数据发送到连接的套接字。返回值是要发送的字节数量，该数量可能小于 string 的字节大小。
	- .recvfrom() 接收 UDP 数据，与 recv() 类似，但返回值是（data,address）。其中 data 是包含接收数据的字符串，address 是发送数据的套接字地址。
	- .sendto() 发送 UDP 数据，将数据发送到套接字，address 是形式为（ipaddr，port）的元组，指定远程地址。返回值是发送的字节数。
	- close() 关闭套接字
	- .getsockname() 以元组形式返回自己的套接字(ipaddr,port)
	- .getpeername() 以元组形式返回连接自己的远程地址的套接字(ipaddr,port)
	- .settimeout(timeout) 设置超时时间
	- .gettimeout() 获取当前的超时时间
	- .setblocking(flag) 如果flag为0，则将套接字设为非阻塞模式，否则将套接字设为阻塞模式（默认值）。非阻塞模式下，如果调用recv()没有发现任何数据，或send()调用无法立即发送数据，那么将引起socket.error异常。
	- .gethostname() 获取当前的host

## udp相关

