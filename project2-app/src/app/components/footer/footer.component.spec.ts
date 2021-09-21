import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared-module/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientModule ],
      declarations: [ FooterComponent ],
      providers: [ HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
