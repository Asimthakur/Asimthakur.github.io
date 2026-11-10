# 📝 Blogs & Digital Garden

*I build intelligent systems and break down complex AI architectures into simple, actionable principles.*

<style>
.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 32px 0;
}

.blog-tag {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
}

.blog-tag:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>

<div class="blog-tags">
  <span class="blog-tag">pytorch</span>
  <span class="blog-tag">transformers</span>
  <span class="blog-tag">deep-learning</span>
  <span class="blog-tag">neural-systems</span>
  <span class="blog-tag">computer-vision</span>
  <span class="blog-tag">nlp</span>
  <span class="blog-tag">inference-pipelines</span>
  <span class="blog-tag">tensor-ops</span>
  <span class="blog-tag">vector-dbs</span>
  <span class="blog-tag">first-principles</span>
  <span class="blog-tag">system-architecture</span>
  <span class="blog-tag">fastapi</span>
  <span class="blog-tag">curated-signal</span>
</div>

---

## 🧠 Core Engineering Essays & Breakdowns

* **[From Raw Data to Curated Signal: The Foundation of Performant AI](/blog/curated-signal)**  
  *Why training models on unverified data fails, and how data curation separates robust systems from noisy warehouses.*

* **[Demystifying Transformer Attention Mechanisms](/blog/transformer-attention)**  
  *Breaking down query, key, and value vector mathematics into clean, readable PyTorch code.*

* **[Backpropagation from First Principles: Deriving Gradients in Pure PyTorch](/blog/backprop-from-scratch)**  
  *A step-by-step mathematical walkthrough of how neural networks optimize weights under the hood.*

* **[Engineering Low-Latency AI Inference Pipelines with FastAPI](/blog/fastapi-ai-inference)**  
  *Structuring model serving, asynchronous batching, and production backends for real-world reliability.*