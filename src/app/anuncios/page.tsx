export default function Anuncios() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Anúncios</h1>
        <p className="text-muted-foreground">
          Gerencie seus anúncios e campanhas publicitárias.
        </p>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Campanhas Ativas</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Campanha de Verão 2024</h4>
                <p className="text-sm text-muted-foreground">Google Ads • Facebook</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">R$ 2.450</div>
                <p className="text-xs text-muted-foreground">CTR: 3.2%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Promoção Black Friday</h4>
                <p className="text-sm text-muted-foreground">Instagram • YouTube</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">R$ 8.720</div>
                <p className="text-xs text-muted-foreground">CTR: 5.8%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Lançamento Produto</h4>
                <p className="text-sm text-muted-foreground">LinkedIn • Twitter</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">R$ 1.890</div>
                <p className="text-xs text-muted-foreground">CTR: 2.1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-sm font-medium mb-2">Impressões Totais</h3>
          <div className="text-2xl font-bold">1,234,567</div>
          <p className="text-xs text-muted-foreground">
            +12.5% esta semana
          </p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-sm font-medium mb-2">Cliques</h3>
          <div className="text-2xl font-bold">45,678</div>
          <p className="text-xs text-muted-foreground">
            +8.2% esta semana
          </p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-sm font-medium mb-2">Conversões</h3>
          <div className="text-2xl font-bold">2,345</div>
          <p className="text-xs text-muted-foreground">
            +15.3% esta semana
          </p>
        </div>
      </div>
    </div>
  );
}