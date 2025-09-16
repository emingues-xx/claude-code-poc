export default function Sobre() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sobre</h1>
        <p className="text-muted-foreground">
          Conheça mais sobre nossa plataforma e missão.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Nossa Missão</h2>
        <p className="text-muted-foreground mb-4">
          Desenvolvemos soluções inovadoras para transformar a forma como as empresas 
          gerenciam seus processos digitais. Nossa plataforma oferece ferramentas 
          intuitivas e poderosas para otimizar a produtividade e alcançar resultados 
          excepcionais.
        </p>
        <p className="text-muted-foreground">
          Desde nossa fundação, temos o compromisso de entregar valor real aos nossos 
          clientes, combinando tecnologia de ponta com uma experiência do usuário 
          excepcional.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-3">Nossos Valores</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Inovação constante</li>
            <li>• Transparência em tudo que fazemos</li>
            <li>• Foco na experiência do cliente</li>
            <li>• Qualidade sem compromissos</li>
            <li>• Crescimento sustentável</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-3">Estatísticas</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Clientes Ativos</span>
              <span className="font-semibold">+10.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Países Atendidos</span>
              <span className="font-semibold">25+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Uptime</span>
              <span className="font-semibold">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Suporte 24/7</span>
              <span className="font-semibold">✓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Contato</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-muted-foreground">contato@empresa.com</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Telefone</h4>
            <p className="text-muted-foreground">(11) 9999-9999</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Endereço</h4>
            <p className="text-muted-foreground">São Paulo, SP</p>
          </div>
        </div>
      </div>
    </div>
  );
}