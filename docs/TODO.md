---
### core
- [ ] ping 域名，并得到线上远程 ip 地址
- [ ] 根据不同 config.proxy.host 定位不同请求来源
- [ ] 命中规则 走代理
- [ ] 没有命中规则，带上远程 ip 绑定 host 访问线上
- [ ] 默认读取请求头过期时间，如 cdn 远程资源，可以保存在内存或者本地 cache
- [ ] header 返回增加
- [ ] 只缓存 200 的请求
- [ ] 透传所有请求头
- [ ] 修改请求头
- [ ] 修改返回请求头
- [ ] 自定义 x-hint 标记来源
- [ ] 非 http 协议转发

### network
- [ ] pac 地址配置
- [ ] 代理所有流量到调试机
- [ ] 断点
- [ ] 修改 res 再返回

### ssl 证书
- [ ] 证书签发
- [ ] 证书加入信任链
- [ ] 证书销毁
