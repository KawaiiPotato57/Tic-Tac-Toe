import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState , Component } from 'react';


export default function App(){

  const [board, setBoard] = useState([
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ]);
  const [turn,setTurn] = useState(1);
 

  const userPress = (row, col) => {

    var g_board = board;
    g_board[row][col] = turn == 1 ? 1 : 2;
    let nextTurn = turn == 1 ? 2 : 1;

    setBoard(g_board);
    setTurn(nextTurn);

    let res = result();

    if(res==1 && tie()==false){
      alert("Winner\n ~ PLAYER 1 ~");
      setTurn(1);
      setBoard([
         [0,0,0],
         [0,0,0],
         [0,0,0],
      ])
    }
    else if(res==2 && tie()==false){
      alert("Winner\n ~ PLAYER 2 ~")
      setTurn(1);
      setBoard([
         [0,0,0],
         [0,0,0],
         [0,0,0],
      ])
    }
    else if(tie()==true){
      alert("Tie");
      setTurn(1);
      setBoard([
         [0,0,0],
         [0,0,0],
         [0,0,0],
      ])
    }
  };

  const result = () => {
    var g_borad = board;
    //checking diagonals
    if(g_borad[0][0]==1 && g_borad[0][1]==1 && g_borad[0][2]==1){
      return 1;
    }
    else if(g_borad[0][0]==2 && g_borad[0][1]==2 && g_borad[0][2]==2){
      return 2;
    }
    else if(g_borad[1][0]==1 && g_borad[1][1]==1 && g_borad[1][2]==1){
      return 1;
    }
    else if(g_borad[1][0]==2 && g_borad[1][1]==2 && g_borad[1][2]==2){
      return 2;
    }
    else if(g_borad[2][0]==1 && g_borad[2][1]==1 && g_borad[2][2]==1){
      return 1;
    }
    else if(g_borad[2][0]==2 && g_borad[2][1]==2 && g_borad[2][2]==2){
      return 2;
    }

    else if(g_borad[0][0]==1 && g_borad[1][0]==1 && g_borad[2][0]==1){
      return 1;
    }
    else if(g_borad[0][0]==2 && g_borad[1][0]==2 && g_borad[2][0]==2){
      return 2;
    }
    else if(g_borad[0][1]==1 && g_borad[1][1]==1 && g_borad[2][1]==1){
      return 1;
    }
    else if(g_borad[0][1]==2 && g_borad[1][1]==2 && g_borad[2][1]==2){
      return 2;
    }
    else if(g_borad[0][2]==1 && g_borad[1][2]==1 && g_borad[2][2]==1){
      return 1;
    }
    else if(g_borad[0][2]==2 && g_borad[1][2]==2 && g_borad[2][2]==2){
      return 2;
    }

    else if(g_borad[0][0]==1 && g_borad[1][1]==1 && g_borad[2][2]==1){
      return 1;
    }
    else if(g_borad[0][0]==2 && g_borad[1][1]==2 && g_borad[2][2]==2){
      return 2;
    }
    else if(g_borad[2][0]==1 && g_borad[1][1]==1 && g_borad[0][2]==1){
      return 1;
    }
    else if(g_borad[2][0]==2 && g_borad[1][1]==2 && g_borad[0][2]==2){
      return 2;
    }
   
    else{
      return -1;
    }
  };

  const tie = () =>{
    var g_borad = board;
    var count = 0;
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(g_borad[i][j]!=0){
          count++;
        }
      }
    }
    return (count == 9) ? true : false;
   }

  const XO_icons = (row, col) => {
      var value = board[row][col];
      if (value == 1) {
        return <Text style={styles.p1}>O</Text>;
      } else if (value == 2) {
        return <Text style={styles.p2}>X</Text>;
      } else {
        return <View />;
      }
    };
    return (
      
      <View style={styles.container}>
        <Text style={{color: 'white',marginBottom: 15, fontSize: 40}}>TIC-TAC-TOE</Text>
       
        <Text style={{ fontSize: 18, marginBottom: 5, color: '#ff3300' }}>
          " O " For Player 1
        </Text>
        <Text style={{ fontSize: 18, marginTop: 5, marginBottom:20, color: '#6cbedd' }}>
        " X " For PLayer 2
        </Text>

        <Text style={{color:'#F5F5F5',marginBottom: 30, fontSize: 20 }}>
          Turn = Player {turn}
        </Text>
  
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell]}
            onPress={() => {
              userPress(0, 0);
              }}
              >
              <Text>{XO_icons(0,0)}</Text>
            </Pressable>

            <Pressable
            style={[styles.cell]}
            onPress={() => {
              userPress(0, 1);
              }}
              >
              <Text>{XO_icons(0,1)}</Text>
            </Pressable>
       
                 <Pressable
            style={[styles.cell]}
            onPress={() => {
             userPress(0, 2);
             }}>
            <Text>{XO_icons(0,2)}</Text>
          </Pressable>
        </View>

        
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell]}
            onPress={() => {
             userPress(1, 0);
            }}>
            <Text>{XO_icons(1,0)}</Text>
          </Pressable>

          <Pressable
            style={[styles.cell]}
            onPress={() => {
             userPress(1, 1);
           }}>
            <Text>{XO_icons(1,1)}</Text>
          </Pressable>
          <Pressable
            style={[styles.cell]}
            onPress={() => {
              userPress(1, 2);
           }}>
            <Text>{XO_icons(1,2)}</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell]}
            onPress={() => {
             userPress(2, 0);
            }}>
            <Text>{XO_icons(2,0)}</Text>
          </Pressable>

          <Pressable
            style={[styles.cell]}
            onPress={() => {
              userPress(2, 1);
              }}>
            <Text>{XO_icons(2,1)}</Text>
          </Pressable>

          <Pressable
            style={[styles.cell]}
            onPress={() => {
              userPress(2, 2);
            }}>
            <Text>{XO_icons(2,2)}</Text>
          </Pressable>
        </View>
     </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    },
  cell: {
    borderWidth: 3,
    borderColor: 'white',
    width: 100,
    height: 100,
  },
  p1: {
    flex: 1,
    fontSize: 60,
    color: '#ff3300',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
  p2: {
    flex: 1,
    fontSize: 60,
    padding: 20,
    color: '#6cbedd',
    alignItems: 'center',
    justifyContent: 'center',
      },
});