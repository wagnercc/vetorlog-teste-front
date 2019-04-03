import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
/*Ops, não foi elaborado nenhum teste!! 
  A noticia boa é que eu tentei implementar, porém não tive tempo de terminar.
  Isso, inclusive, será meu próximo foco de estudos.
  Eu estou ciente de que poderia ter feito muito mais coisas pra acrescentar.
  Só que esse foi o meu primeiro contato com o angular e o segundo com essas
  "novas tecnologias". Enfim, espero que tenha suprido as expectativas 
  pq a vontade de vir a somar na equipe é GRANDE. Foram quase duas noites
  sem dormir, mas valeu cada segundo pelos aprendizados. Obrigado!!*/
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-vetorlog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('teste-vetorlog');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to teste-vetorlog!');
  });
});
