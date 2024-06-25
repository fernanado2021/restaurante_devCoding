import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMeserosComponent } from './editar-meseros.component';

describe('EditarMeserosComponent', () => {
  let component: EditarMeserosComponent;
  let fixture: ComponentFixture<EditarMeserosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMeserosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMeserosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
