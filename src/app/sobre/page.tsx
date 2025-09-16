export default function Sobre() {
  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça mais sobre nossa plataforma e missão.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg border p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Claude Project</h2>
            <p className="text-muted-foreground text-lg">Versão 0.1.0</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-muted-foreground mb-6">
              Desenvolvemos soluções inovadoras para transformar a forma como as empresas 
              gerenciam seus processos digitais. Nossa plataforma oferece ferramentas 
              intuitivas e poderosas para otimizar a produtividade e alcançar resultados 
              excepcionais.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                Inovação constante
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                Transparência em tudo que fazemos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                Foco na experiência do cliente
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                Qualidade sem compromissos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                Crescimento sustentável
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Estatísticas</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Clientes Ativos</span>
                <span className="font-bold text-lg">+10.000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Países Atendidos</span>
                <span className="font-bold text-lg">25+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Uptime</span>
                <span className="font-bold text-lg">99.9%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Suporte 24/7</span>
                <span className="font-bold text-lg text-green-500">✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">📚 Documentação</h3>
            <p className="text-muted-foreground mb-4">
              Acesse nossa documentação completa para começar rapidamente.
            </p>
            <a 
              href="/docs" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver Documentação
            </a>
          </div>

          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">🛟 Suporte</h3>
            <p className="text-muted-foreground mb-4">
              Precisa de ajuda? Nossa equipe está sempre pronta para ajudar.
            </p>
            <a 
              href="/suporte" 
              className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Contatar Suporte
            </a>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg border p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Entre em Contato</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📧</span>
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">contato@empresa.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📞</span>
              </div>
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-muted-foreground">(11) 9999-9999</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📍</span>
              </div>
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-muted-foreground">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}