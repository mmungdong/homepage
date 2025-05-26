// 检测url地址是否可达
export async function checkConnectivity(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD', // 使用 HEAD 方法减少数据传输量
      mode: 'no-cors', // 绕过 CORS 限制（但可能无法读取响应状态）
    });
    // 若未触发 catch，说明请求成功到达服务器
    return response.ok || response.status === 0; // 处理 no-cors 模式下的状态码 0
  } catch (error) {
    return false; // 捕获网络错误（如域名无法解析、服务器无响应）
  }
}