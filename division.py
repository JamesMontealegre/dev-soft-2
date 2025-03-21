def div_w_div(a, b):
    if b == 0:
        return "Error: División por cero"
    
    cociente = 0
    residuo = a

    while residuo >= b:
        residuo -= b
        cociente += 1
    
    return cociente, residuo  

print(div_w_div(10, 2))  
print(div_w_div(15, 4))  
print(div_w_div(20, 5))  
print(div_w_div(7, 3))   
print(div_w_div(9, 0))   
