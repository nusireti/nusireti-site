# 🦝 RAG 智能知识库

> 企业级知识库问答系统 · GitHub 开源

## 项目简介

基于 LangChain + ChromaDB + Streamlit 构建的企业级 RAG 知识库问答系统。用户上传 PDF/Word/Markdown 文档后，AI 能基于文档内容进行智能问答，支持多轮对话、多知识库管理、混合检索等功能。

## 核心功能

- **多知识库管理**：创建、切换、删除独立知识库
- **多格式文档支持**：PDF / TXT / MD / DOCX
- **混合检索**：向量检索 + BM25 关键词检索
- **多模型接入**：Ollama（本地）/ OpenAI / DeepSeek / 通义千问
- **Agent 模式**：AI 自动选择知识库检索、联网搜索或直接回答
- **流式输出**：文字逐字显示，无需等待完整生成
- **RAG 模式与 Agent 模式**：两种模式自由切换
- **用户系统**：登录注册、Session 管理、密码加密

## 技术栈

| 类别 | 技术 |
|:----|:----|
| 前端 | Streamlit · 自定义 CSS（浅蓝商务风） |
| 后端 | Python · LangChain · FastAPI |
| 向量数据库 | ChromaDB · BM25 混合检索 |
| LLM | Ollama · OpenAI · DeepSeek · 通义千问 |
| 数据库 | SQLAlchemy · SQLite |
| 部署 | Docker · Streamlit Cloud |

## 安全特性

- bcrypt 密码哈希
- Session Token（BLAKE2b 签名）
- 登录速率限制（5 次失败锁定 15 分钟）
- 文件上传白名单校验
- 日志自动脱敏
- XSS 防护 / CSRF 防护

## 链接

- GitHub：<https://github.com/nusireti/rag-knowledge-base>
  
## 截图

*（待补充）*
